import React from 'react'

export default function () {
  return (
    <div>
        <hr />
        <ul>
          <a href="">browse job</a>
          <a href="">browse companies</a>
          <a href="">countries</a>
          <a href="">about</a>
          <a href="">help center</a>
        </ul>
        <select name="languages">
          <option value="English">English</option>
          <option value="Français">Français</option>
          <option value="العربية">العربية</option>
        </select>
        <p>&copy; Job's {new Date().getFullYear()} . All rights reserved.</p>
    </div>
  )
}
