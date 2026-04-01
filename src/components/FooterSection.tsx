const FooterSection = () => {
  return (
    <footer className=" border-border py-1">
      <div className="container mx-auto px-6 flex items-center justify-center">
        <p className="text-muted-foreground text-sm font-light">
          © {new Date().getFullYear()} VšĮ „Tėvynės labui"
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
