import { uploadProductsToFirestore } from "../services/products";
import toast from "react-hot-toast";

const ImportProducts = () => {
  const handleImport = async () => {
    console.log("Button Clicked");
    console.log(uploadProductsToFirestore);

    try {
      await uploadProductsToFirestore();
      console.log("Finished Upload");
      toast.success("Products uploaded successfully ✅");

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleImport}
        className="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Import Products
      </button>
    </div>
  );
};

export default ImportProducts;