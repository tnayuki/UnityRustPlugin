mergeInto(LibraryManager.library, {
  generate_image: function (buffer, width, height) {
    window.mandelbrot.exports.generate_image(window.mandelbrotBufferOffset, width, height);

    HEAPU8.set(new Uint8Array(window.mandelbrot.exports.memory.buffer.slice(window.mandelbrotBufferOffset, window.mandelbrotBufferOffset + width * height * 4)), buffer);
  },
});
