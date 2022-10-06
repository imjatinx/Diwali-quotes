import React from 'react'

function QuoteCard(props) {

  var copy = document.querySelectorAll(".copy");

  for (const copied of copy) {
    copied.onclick = function () {
      document.execCommand("copy");
    };
    copied.addEventListener("copy", function (event) {
      let tag = event.currentTarget;
      tag.style.backgroundColor = "#6419e6";
      tag.style.transform = "scale(1.05)";
      setTimeout(() => {
        tag.style.backgroundColor = "";
        tag.style.transform = "scale(1)";
      }, 300);
      event.preventDefault();

      if (event.clipboardData) {
        event.clipboardData.setData("text/plain", copied.textContent);
        event.clipboardData.getData("text")
      };
    });
  };

  return (
    <>
      <div className="hover:before:content-['Click_to_copy'] hover:before:absolute hover:before:bottom-1 hover:before:right-2 hover:before:bg-base-100 hover:before:rounded-none hover:before:px-2 card w-64 h-36 bg-slate-600 border border-white shadow-xl image-full copy cursor-pointer transition duration-300 ease-in-out">
        <div className="card-body py-3 relative">
          <p>{props.data[1].attributes.quote}</p>
        </div>
      </div>
    </>
  )
}

export default QuoteCard
