import React from 'react';

const Select = ({ 
  value, 
  onChange, 
  children, 
  className = '', 
  placeholder,
  ...props 
}) => {
  const baseClasses = 'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50';
  
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {children}
    </select>
  );
};

const SelectOption = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};

export { Select, SelectOption };