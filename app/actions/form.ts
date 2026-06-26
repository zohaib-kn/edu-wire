"use server";

export interface FormResponse {
  success: boolean;
  message: string;
  isDevMock?: boolean;
}

export async function submitConsultationForm(formData: {
  fullname: string;
  email: string;
  phone: string;
  city: string;
  education: string;
  country: string;
}): Promise<FormResponse> {
  const isDev = process.env.NODE_ENV === "development";
  const endpoint = "https://edu-wire.com/submit_form.php?source=nextjs";

  try {
    const params = new URLSearchParams();
    params.append("fullname", formData.fullname);
    params.append("email", formData.email);
    params.append("phone", formData.phone);
    params.append("city", formData.city);
    params.append("education", formData.education);
    params.append("country", formData.country);

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
      cache: "no-store",
    });

    // Check if the submission reached the endpoint successfully
    if (response.ok) {
      return { success: true, message: "Your consultation request was submitted successfully." };
    } else {
      throw new Error(`Endpoint returned status ${response.status}`);
    }
  } catch (error) {
    console.error("Form submission proxy error:", error);
    
    if (isDev) {
      return {
        success: true,
        isDevMock: true,
        message: "Submitted successfully (Development Mock State).",
      };
    }
    
    return {
      success: false,
      message: "Email service not configured. We cannot process your request at this moment.",
    };
  }
}

export async function submitContactForm(formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  destination: string;
  course: string;
  studyPlan: string;
  preferredYear: string;
}): Promise<FormResponse> {
  const isDev = process.env.NODE_ENV === "development";
  const endpoint = "https://edu-wire.com/contact.php";

  try {
    const params = new URLSearchParams();
    params.append("firstName", formData.firstName);
    params.append("lastName", formData.lastName);
    params.append("email", formData.email);
    params.append("phone", formData.phone);
    params.append("destination", formData.destination);
    params.append("course", formData.course || "");
    params.append("studyPlan", formData.studyPlan);
    params.append("preferredYear", formData.preferredYear);
    params.append("consent", "on");

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
      cache: "no-store",
    });

    if (response.ok) {
      return { success: true, message: "Your message was sent successfully." };
    } else {
      throw new Error(`Endpoint returned status ${response.status}`);
    }
  } catch (error) {
    console.error("Form submission proxy error:", error);
    
    if (isDev) {
      return {
        success: true,
        isDevMock: true,
        message: "Submitted successfully (Development Mock State).",
      };
    }
    
    return {
      success: false,
      message: "Email service not configured. We cannot process your request at this moment.",
    };
  }
}
