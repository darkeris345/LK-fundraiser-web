const FooterSection = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 flex items-center justify-center">
        <p className="text-muted-foreground text-sm font-light">
          © {new Date().getFullYear()} VšĮ „Tėvynės labui". All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
