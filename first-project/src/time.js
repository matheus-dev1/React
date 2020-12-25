function time() {
    return (
        <p> Sao exatamente {new Date().toLocaleString()}.</p>
      );
}
setInterval(time, 1000);

export default time;