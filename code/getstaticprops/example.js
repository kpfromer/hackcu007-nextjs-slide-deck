export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Home(props) {
  // Props here will match what's returned in `getStaticProps`
  return (
    <div>
      Hello!
    </div>
  );
}