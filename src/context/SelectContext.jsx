import React, { createContext, useContext, useState, useEffect } from 'react';

const SelectContext = createContext();

export const useSelect = () => useContext(SelectContext);

export const SelectProvider = ({ children }) => {
  const [select, setSelect] = useState([]);
  const [login,setLogin]= useState(false)
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(false);
  const [discountPrice, setDiscountPrice] = useState(10); 
  const ship = 5;

  const calculateSubtotal = (items) => {
    let total = 0;
    // Calculate total price based on each item's price and quantity
    items.forEach(item => {
      total += (item.price * item.quantity);
    });
    setSubtotal(total);
    let shippingAmount = Math.ceil((total / 100) * ship);
    if (discount) {
      let discountAmount = Math.ceil((total / 100) * discountPrice);
      setTotal(total - discountAmount + shippingAmount);
    } else {
      setTotal(total + shippingAmount);
    }
  };

  useEffect(() => {
    calculateSubtotal(select);
  }, [select, discount, discountPrice]);
  return (
    <SelectContext.Provider value={{ setLogin,login,ship,select, setSelect, subtotal, total, discount, setDiscount, discountPrice, setDiscountPrice }}>
      {children}
    </SelectContext.Provider>
  );
};

export default SelectProvider
