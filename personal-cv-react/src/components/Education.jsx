function Education({ education }) {
  return (
    <section className="card">
      <h2>EDUCATION</h2>

      <table>
        <thead>
          <tr>
            <th>PROGRAM</th>
            <th>INSTITUTION</th>
            <th>YEAR GRADUATED</th>
          </tr>
        </thead>

        <tbody>
          {education.map((item, index) => (
            <tr key={index}>
              <td>{item.program}</td>
              <td>{item.school}</td>
              <td>{item.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Education;
