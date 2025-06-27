

# react-native-get-countries

A simple utility to fetch a list of countries via API in React Native applications.

## 📦 Installation

```sh
npm install react-native-get-countries
```

or with yarn:

```sh
yarn add react-native-get-countries
```

## 🚀 Usage

```js
import getCountries from "react-native-get-countries";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

const ExampleComponent = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries()
      .then((res) => setCountries(res))
      .catch((err) => console.error("Error fetching countries:", err));
  }, []);

  return (
    <View>
      {countries.map((country, index) => (
        <Text key={index}>{country.name}</Text>
      ))}
    </View>
  );
};
```

## 📘 API

This library fetches a list of countries from an online API and returns it as an array of objects. Each object contains country details like:

```js
{
  name: "Canada",
  code: "CA",
  // ...other properties depending on API
}
```

## 🤝 Contributing

We welcome contributions! Please refer to the [contributing guide](CONTRIBUTING.md) for setup instructions and best practices.

## 📄 License

This project is licensed under the MIT License.

---

> Created with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

---

