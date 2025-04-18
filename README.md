# 🧠 Multi-Select Dropdown Component (Assignment for Lobox)

This project is a reusable **multi-select dropdown** component built using **React**, **TypeScript**, and **SCSS**. It was created as part of a technical assignment for a front-end developer role.

## 📌 Features

- Select multiple items from a dropdown list
- Add new items by typing
- Dropdown closes when clicking outside the component
- Reusable component with clean props interface
- Written in **TypeScript** for type safety
- Styled using **SCSS**, closely matching the provided UI design

## 🚀 Technologies Used

- **React 18**
- **TypeScript**
- **Vite** (for fast development)
- **SCSS** (modular, custom styles)
- **React Hooks** (`useState`, `useEffect`, `useRef`)

## 📁 Project Structure

```
src/
├── components/
│   └── MultiSelect.tsx       # Reusable dropdown component
│   └── MultiSelect.scss      # Component-specific styling
├── styles/
│   └── main.scss             # Global styles
├── App.tsx                   # Example usage
├── main.tsx                  # Entry point
```

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Epic2077/dropdown.git
cd dropdown
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the project locally

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🧩 Component Props

```ts
type MultiSelectProps = {
  options: string[]; // Initial list of selectable items
  onChange?: (selected: string[]) => void; // Callback when selected values change
  placeholder?: string; // Placeholder for the input field
};
```

---

## 🎯 Future Improvements

- Keyboard navigation (arrow keys + Enter)
- Accessibility enhancements (ARIA roles)
- Option grouping or tagging support

---

## 📄 License

This project is for demonstration and technical evaluation purposes.

---

Made with 💙 by [Ashkan Sadeghi](https://github.com/Epic2077)
