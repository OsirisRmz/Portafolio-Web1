document.addEventListener("DOMContentLoaded", function () {
  const respuestasCorrectas = {
    q1: "Paris",
    q2: "Tokio",
    q3: "Brasilia",
    q4: "Canberra",
    q5: "Ottawa"
  };

  let puntuaciones = [];

  document.getElementById("quizForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let puntaje = 0;
    puntuaciones = [];

    for (let [key, value] of formData.entries()) {
      if (value === respuestasCorrectas[key]) {
        puntuaciones.push(4);
        puntaje += 4;
      } else {
        puntuaciones.push(0);
      }
    }

    document.getElementById("resultado").textContent =
      `Obtuviste ${puntaje} de 20 puntos.`;

    drawChart(); // dibuja gráfico
  });

  google.charts.load('current', { packages: ['bar'] });
});

  function drawChart() {
    const data = google.visualization.arrayToDataTable([
      ['Pregunta', 'Puntos'],
      ['Pregunta 1', puntuaciones[0]],
      ['Pregunta 2', puntuaciones[1]],
      ['Pregunta 3', puntuaciones[2]],
      ['Pregunta 4', puntuaciones[3]],
      ['Pregunta 5', puntuaciones[4]],
    ]);

    const options = {
      chart: {
        title: 'Resultados por Pregunta',
        subtitle: 'Cada pregunta vale 4 puntos'
      },
      bars: 'horizontal',
      colors: ['#4caf50'],
      vAxis: { minValue: 0, maxValue: 4 }
    };

    const chart = new google.charts.Bar(document.getElementById('barchart_material'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
  }

function generarPDF() {
  var doc = new jsPDF();

  // Título del documento
  doc.setFontSize(18);
  doc.setTextColor(0, 0, 0);
  doc.text("Resultados del Diagnóstico de Capitales", 20, 20);

  // Detalles de cada pregunta
  doc.setFontSize(12);
  puntuaciones.forEach((p, i) => {
    const texto = `Pregunta ${i + 1}: ${p === 4 ? "Correcta (4 pts)" : "Incorrecta (0 pts)"}`;
    doc.text(texto, 20, 40 + i * 10);
  });

  // Total
  const total = puntuaciones.reduce((a, b) => a + b, 0);
  doc.setFontSize(14);
  doc.setTextColor(0, 102, 51);
  doc.text(`Total: ${total} / 20 puntos`, 20, 100);

  // Mostrar el PDF en el iframe
  const pdfUrl = doc.output('datauristring');
  $('iframe#visorPDF').attr('src', pdfUrl);

  document.getElementById("visorPDF").src = pdfUrl;
}


