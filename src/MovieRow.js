import React from "react";

export default function MovieRow(props) {
  return (
    <tbody>
      <tr>
        <td>
          <img src={props.poster_src} style={{}} width="120" alt="poster" />
        </td>
        <td>
          {props.title}
          <p>{props.overview}</p>
        </td>
      </tr>
    </tbody>
  );
}
