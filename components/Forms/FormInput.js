export default function FormInput({ param, register }) {
  return (
    <div className="form-elem">
      <div>
        <label htmlFor={param.name}>{param.name}</label>
      </div>
      <input
        id={param.name}
        type={param.type}
        value={param.value}
        {...register(param.name, { required: true })}
      />
    </div>
  )
}
