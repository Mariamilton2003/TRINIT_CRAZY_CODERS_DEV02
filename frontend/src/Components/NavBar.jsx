const NavBar = () => {
  return (
    <>
      <div className="w-full text-nowrap flex gap-x-12 justify-between items-center px-3 py-2 bg-mainBg-50">
        <div className="font-heading font-bold text-2xl text-txt-950">
          Lingua Connect
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="font-body font-bold">Home</div>
          <div className="font-body font-bold">About Us</div>
          <div className="font-body font-bold">Tutors</div>
          <div className="font-body font-bold">Students</div>
          <div className="font-body font-bold">Contact US</div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
