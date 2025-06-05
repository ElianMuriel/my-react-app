const emojis = { nombre: 'Elian', apellido: 'Muriel' };

export default function EmojiList() {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{emojis.nombre}</td>
          <td>{emojis.apellido}</td>
        </tr>
      </tbody>
    </table>
  );
}