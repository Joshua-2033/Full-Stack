import "./App.css";

function App() {
  return (
    <div className="container">

      <h1>CSS Practice Website</h1>

      {/* Padding, Border, Radius, Background, Color, Font */}
      <div className="box">
        <h2>1. Basic Styling</h2>
        <p>
          This box demonstrates padding, border, border-radius, background,
          color, font-size and text alignment.
        </p>

        <button className="btn">
          Hover Over Me
        </button>
      </div>

      {/* Flex */}
      <div className="section">
        <h2>2. Flexbox</h2>

        <div className="flex-row">
          <div className="card">Item 1</div>
          <div className="card">Item 2</div>
          <div className="card">Item 3</div>
        </div>
      </div>

      {/* Grid */}
      <div className="section">
        <h2>3. CSS Grid</h2>

        <div className="grid">
          <div className="grid-box">1</div>
          <div className="grid-box">2</div>
          <div className="grid-box">3</div>
          <div className="grid-box">4</div>
          <div className="grid-box">5</div>
          <div className="grid-box">6</div>
        </div>
      </div>

      {/* Justify Content + Align Items */}
      <div className="section">
        <h2>4. Justify Content & Align Items</h2>

        <div className="alignment-box">
          <div className="small-box">A</div>
          <div className="small-box">B</div>
          <div className="small-box">C</div>
        </div>
      </div>

      {/* Position */}
      <div className="section">
        <h2>5. Position</h2>

        <div className="relative-box">
          Relative Parent

          <div className="absolute-box">
            Absolute
          </div>
        </div>
      </div>

      <div className="sticky">
        Sticky Navbar
      </div>

      <div className="space"></div>

    </div>
  );
}

export default App;
