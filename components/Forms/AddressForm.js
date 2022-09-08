import React, { useState } from "react"
import { useForm } from "react-hook-form"
import CountrySelect from "./CountrySelect"
import FormInput from "./FormInput"
import Container from "../../components/common/Container"

const addressparams = [
  { name: "firstname", type: "text" },
  { name: "lastname", type: "text" },
  { name: "address1", type: "text" },
  { name: "email", type: "email" },
  { name: "city", type: "text" },
  { name: "zip", type: "text" },
]

export default function AddressForm({ checkoutToken, setShippingData }) {
  const { handleSubmit, register, setValue } = useForm()
  const [disabled, setDisabled] = useState(true)

  const submitData = (data) => {
    setShippingData(data)
  }
  return (
    <div>
      <Container>
        <form
          onSubmit={handleSubmit(submitData)}
          className="flex flex-col gap-2"
        >
          {addressparams.map((param) => {
            return (
              <FormInput key={param.name} param={param} register={register} />
            )
          })}
          <CountrySelect
            setDisabled={setDisabled}
            setValue={setValue}
            checkoutToken={checkoutToken}
            register={register}
          />
          <button disabled={disabled} type="submit">
            Next
          </button>
        </form>
      </Container>
    </div>
  )
}
