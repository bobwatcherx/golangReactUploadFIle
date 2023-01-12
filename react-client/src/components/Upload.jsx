

import { Button, Heading, VStack, Image, HStack, Tag } from "@chakra-ui/react";
import React from "react";
import { useRef } from "react";
import useUpload from "../hooks/useUpload";

function Upload() {
  const imageRef = useRef(null);
  const {
    loading,
    image,
    imageUrl,
    handleRemoveImage,
    handleChangeImage,
    handleUploadImage,
    uploadedImage,
  } = useUpload();
  return (
    <div>
      <input
        style={{ display: "none" }}
        type="file"
        accept="image/*"
        ref={imageRef}
        onChange={handleChangeImage}
      />
      <VStack>
        <Heading>Upload image golang +  react js</Heading>
        <Button
          onClick={() => imageRef.current.click()}
          colorScheme="blue"
          size="lg"
        >
          Select Image
        </Button>
      <h1>image url {imageUrl}</h1>
      </VStack>
      {image && (
        <VStack my="4">
          <Image
            src={URL.createObjectURL(image)}
            width="300px"
            height="300px"
            alt="selected image..."
          />
          <Button
            onClick={handleUploadImage}
            variant="outline"
            colorScheme="green"
            isLoading={loading}
          >
            Upload
          </Button>
        </VStack>
      )}

      {uploadedImage && (
        <VStack my="4">
          <Image
            src={uploadedImage.imageUrl}
            width="300px"
            height="300px"
            alt={uploadedImage.imageName}
          />

          <HStack>
            <Tag variant="outline" colorScheme="blackAlpha">
              ~ {Math.floor(uploadedImage.size / 1024)} Kb
            </Tag>
            <Button
              variant="solid"
              colorScheme="red"
              onClick={handleRemoveImage}
              isLoading={loading}
            >
              Delete
            </Button>
          </HStack>
        </VStack>
      )}
    </div>
  );
}

export default Upload;



