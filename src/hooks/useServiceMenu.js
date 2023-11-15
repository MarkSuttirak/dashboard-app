import { ServiceContext } from "src/components/provider/serviceProvider";
import { useContext } from "react";

export const useServiceMenus = () => {
  const services = useContext(ServiceContext);

  if (!services) {
    throw new Error('useServiceMenus must be used within a ServiceProvider');
  }
  return services;
};