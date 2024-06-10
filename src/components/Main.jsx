import List from './List';

const Main = () => {
  return (
    <main className="container">
      <section className="containers_header">
        <img src="/icon-star.svg" alt="star" className="star-img" />
        <h1>FAQs</h1>
      </section>
      <section className="Faqs_List">
        <List></List>
      </section>
    </main>
  );
};

export default Main;
