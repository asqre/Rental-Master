import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { storage } from "../config/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [dataLoading, setDataLoading] = useState(true);
  const [bannerImages, setBannerImages] = useState([]);

  const getBannerImages = async () => {
    setDataLoading(true);
    try {
      const imageRef = ref(storage, "banner-images/");
      console.log("Getting banner images");
      
      const result = await listAll(imageRef);
      const urlPromises = result.items.map((imageRef) =>
        getDownloadURL(imageRef)
      );
      const urls = await Promise.all(urlPromises);

      setBannerImages(urls);
    } catch (error) {
      console.error("Error fetching images : ", error);
    } finally {
      setDataLoading(false);
    }
  };

  useEffect(() => {
    getBannerImages();
  }, []);

  const dataValue = {
    dataLoading,
    bannerImages,
  };

  return (
    <DataContext.Provider value={dataValue}>{children}</DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };