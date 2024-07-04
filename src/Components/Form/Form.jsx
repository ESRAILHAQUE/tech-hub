function Form() {
  return (
    <div className="flex justify-center items-center min-h-screen max-w-[1440px] mx-auto px-4 lg:px-28 md:px-14 absolute bottom-1 z-20 ">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-md border border-primary-color">
        <h1 className="text-4xl font-extrabold mb-4 text-center text-primary-color">
          Get Started Now!
        </h1>
        <p className="mb-6 text-center text-gray-600">
          Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam
          quis enim lobortis scelerisque fermentum dui faucibus in ornare quam
          viverra orci.
        </p>
        <form className="">
          <div className="form-control mb-4">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full p-2 border border-primary-color focus:outline-none rounded"
              required
            />
          </div>
          <div className="form-control mb-4">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full p-2 border border-primary-color focus:outline-none rounded"
              required
            />
          </div>
          <input
            type="file"
            className="file-input file-input-bordered file-input-accent w-full "
          />

          <div className="form-control mt-6">
            <button className="btn   bg-primary-color text-white py-2 rounded-full">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
