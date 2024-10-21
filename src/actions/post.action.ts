"use server";

export async function handlePost(formData: any) {
  console.log(formData);
  return { success: true };
}
