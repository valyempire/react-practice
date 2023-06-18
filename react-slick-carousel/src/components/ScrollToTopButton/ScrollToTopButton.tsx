export const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return <button onClick={scrollToTop}>Scroll to Top</button>;
};
