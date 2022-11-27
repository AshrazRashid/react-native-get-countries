# react-native-get-countries

get countries from api

## Installation

```sh
npm install react-native-get-countries
```

## Usage

```js
import getcountries from "react-native-get-countries";


// ...

useEffect(() => {
    getcountries()
      .then((res) => setCountries(res))
      .catch((err) => console.log("err", err));
  }, [countries]);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
