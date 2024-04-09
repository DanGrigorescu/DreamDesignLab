import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { CldUploadWidget } from "next-cloudinary";
const MediaUploader = () => {
  const { toast } = useToast();
  const onUploadSuccesHandler = (result: any) => {
    toast({
      title: "Image uploaded successfully",
      description: "1 credit used",
      duration: 5000,
      className: "succes-toast",
    });
  };

  const onUploadErrorHandler = () => {
    toast({
      title: "Something went wrong",
      description: "Please try again",
      duration: 5000,
      className: "error-toast",
    });
  };
  return (
    <CldUploadWidget
      uploadPreset="jsm_dreamdesignlab"
      options={{
        multiple: false,
        resourceType: "image",
      }}
      onSuccess={onUploadSuccesHandler}
      onError={onUploadErrorHandler}
    ></CldUploadWidget>
  );
};

export default MediaUploader;
