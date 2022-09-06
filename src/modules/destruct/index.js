export default function () {
  const object = {
    firstName: "Tom",
    age: 35,
    greet({ startMessage, endMessage }) {
      const result = `${startMessage}, ${endMessage}`;

      console.log(result);
      return result;
    }
  };

  const { age, firstName, greet } = object;

  greet({ startMessage: "Hello", endMessage: "what you gonna do today?" });

  console.log(age, firstName);
}
