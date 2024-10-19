import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { storage } from "../config/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [city, setCity] = useState(() => {
    const storedCity = localStorage.getItem("city");
    return storedCity ? storedCity : null;
  });
  const [isModalOpen, setIsModalOpen] = useState(!city);
  const [dataLoading, setDataLoading] = useState(true);
  const [bannerImages, setBannerImages] = useState([]);
  const [companyName, setCompanyName] = useState("Rental Master");

  const getBannerImages = async () => {
    setDataLoading(true);
    try {
      const imageRef = ref(storage, "banner-images/");

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

  useEffect(() => {
    if (city) {
      localStorage.setItem("city", city);
    } else {
      localStorage.removeItem("city");
    }
  }, [city]);

  const dataValue = {
    dataLoading,
    bannerImages,
    companyName,
    isModalOpen,
    setIsModalOpen,
    city,
    setCity,
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
