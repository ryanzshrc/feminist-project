export async function uploadImage(file) {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "article-images");

    const response = await fetch(
        "https://api.cloudinary.com/v1_1/gewimryu/image/upload",
        {
            method: "POST",
            body: formData
        }
    );

    if (!response.ok) {
        throw new Error("Image upload failed.");
    }

    return await response.json();
}