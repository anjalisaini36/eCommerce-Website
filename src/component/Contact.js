import React from "react";

function Contact(props) {
  const {
    submit,
    onChange,
    formData,
    formError
  } = props;



  return (
    <div className="bg-image p-5">
      <div className=" p-4 m-auto col-3 ">
        <h2 className=" form-heading fw-bold mb-4 text-white">Contact Us</h2>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            className={formError?.email||'form-control'}
            placeholder="email@example.com"
            value={formData?.email}
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Name"
            value={formData?.username}
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="mobile"
            className={formError?.mobile||'form-control'}
            placeholder="Mobile Number"
            value={formData?.mobile}
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter you comment..."
            name="description"
            rows="4"
            value={formData?.description}
            onChange={onChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-register form-control"
          onClick={submit}
          // disabled={true}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Contact;
