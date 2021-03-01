import React from 'react';

const Button = ({ buttonText, buttonActions, isTrueButton }) => {
    return (
      <button
        className={isTrueButton ? `focus:outline-none cursor-pointer no-underline mt-4 mr-8 ml-8 py-3 px-6 border-2 border-green-300 rounded-full text-green-300 bg-white hover:text-white hover:bg-green-300 transition-all duration-300 ease-linear`: `focus:outline-none cursor-pointer no-underline mt-4 mr-8 ml-8 py-3 px-6 border-2 border-red-500 rounded-full text-red-500 bg-white hover:text-white hover:bg-red-500 transition-all duration-300 ease-linear`}
        onClick={buttonActions}
      >
        {buttonText}
      </button>
    )
}

export default Button;