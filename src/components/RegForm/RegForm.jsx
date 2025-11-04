import { useState } from "react";
import {
  validatePassword,
  validatePasswordIsSame,
  allFieldsCheck,
} from "./validators";
import "./RegForm.css";

export function RegForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [samePassword, setSamePassword] = useState("");
  const [isPasswordSame, setIsPasswordSame] = useState(true);
  const [select, setSelect] = useState("");
  const [requiredFieldsError, setRequiredFieldsError] = useState(false);
  const [successMassage, setSuccessMassage] = useState(false);

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setIsPasswordValid(validatePassword(newPassword));
    setIsPasswordSame(validatePasswordIsSame(samePassword, newPassword));
  };

  const handlePasswordRepeatChange = (e) => {
    const newSamePassword = e.target.value;
    setSamePassword(newSamePassword);
    setIsPasswordSame(validatePasswordIsSame(newSamePassword, password));
  };

  const handleSelectChange = (e) => {
    const newSelect = e.target.value;
    setSelect(newSelect);
  };

  const years = Array.from(
    { length: 40 },
    (_, i) => new Date().getFullYear() - i
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const allFieldsFilled = allFieldsCheck([
      name,
      email,
      password,
      samePassword,
      select,
    ]);
    const checkAllVariable =
      allFieldsFilled && isPasswordValid && isPasswordSame;
    if (!checkAllVariable) {
      setRequiredFieldsError(true);
      setSuccessMassage(false);
      return;
    }
    setRequiredFieldsError(false);
    setSuccessMassage(true);

    const formData = {
      name,
      email,
      password,
      samePassword,
      select,
    };
    alert(JSON.stringify(formData, null, 2));
    setTimeout(() => {
      setSuccessMassage(false);
    }, 3000);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPassword("");
    setIsPasswordValid(true);
    setSamePassword("");
    setIsPasswordSame(true);
    setSelect("");
    setRequiredFieldsError(false);
    setSuccessMassage(false);
  };

  return (
    <div className="section">
      <h1>Форма регистрации</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Введите имя"
          onChange={handleNameChange}
        />
        <input
          type="email"
          placeholder="Введите email"
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Введите пароль"
          value={password}
          onChange={handlePasswordChange}
        />

        <div
          className="error-massage"
          // {`error-massage ${isPasswordValid && "invisible-class"}`}
          style={{ opacity: isPasswordValid ? 0 : 1 }}
        >
          Пароль должен состоять из латинских букв и цифр, а также быть не менее
          8 символов {password}
        </div>
        <input
          type="password"
          value={samePassword}
          onChange={handlePasswordRepeatChange}
          placeholder="Повторите пароль"
          style={{
            color: isPasswordSame ? "green" : "red",
          }}
        />
        <div
          className="error-massage"
          style={{
            opacity: isPasswordSame ? 0 : 1,
          }}
        >
          Пароль не совпадают {samePassword}
        </div>
        <select value={select} onChange={handleSelectChange}>
          <option value="">Дата окончания учебного заведения:</option>
          {years.map((year) => (
            <option key={year.toString()} value={year}>
              {year}
            </option>
          ))}
        </select>
        <button type="submit">Отправить</button>
        <button type="reset" onClick={handleReset}>
          Очистить форму
        </button>
        {requiredFieldsError && (
          <div className="error-massage">Проверьте заполнение полей формы</div>
        )}
        {successMassage && (
          <div className="success-massage">Данные успешно отправлены</div>
        )}
      </form>
    </div>
  );
}
