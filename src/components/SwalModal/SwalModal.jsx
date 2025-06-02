import React from "react";
import Swal from "sweetalert2";

const SwalModal = (title, text, icon) => {
  return Swal.fire({
    title: title,
    text: text,
    icon: icon,
  });
};

export default SwalModal;
