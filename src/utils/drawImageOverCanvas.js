const draw = (url, canvas, context, urlObject = undefined) => {
  const img = new Image();

  img.addEventListener("load", function () {
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
  });

  img.setAttribute("src", url);

  urlObject &&
    (img.onload = function () {
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
      urlObject.revokeObjectURL(url);
    });
};

export default draw;
