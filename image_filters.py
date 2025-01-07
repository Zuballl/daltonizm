from PIL import Image
import numpy as np
import os

def apply_filter(image_path: str, filter_type: str) -> str:

    image = Image.open(image_path).convert("RGB")
    image_array = np.array(image)  
    modified_image = image_array.copy() 

    for i in range(modified_image.shape[0]):
        for j in range(modified_image.shape[1]):
            r, g, b = modified_image[i, j]  

            if filter_type == "protanopia":
                modified_image[i, j] = [g, g, max(b, 128)] if r > max(g, b) else [r, g, b]

            elif filter_type == "deuteranopia":
                modified_image[i, j] = [max(r, 128), b, b] if g > max(r, b) else [r, g, b]

            elif filter_type == "tritanopia":
                modified_image[i, j] = [r, max(g, 128), r] if b > max(r, g) else [r, g, b]


    output_path = os.path.splitext(image_path)[0] + f"_{filter_type}_filtred.png"
    
    Image.fromarray(modified_image).save(output_path)

    return output_path