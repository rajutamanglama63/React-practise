import React from 'react'

const GuestForm = () => {
    return (
        <div>
            <h2 className="form-heading">Invite Someone</h2>
            <form>
                <div>
                    <input className="input-field" type="text" placeholder="Name" />
                    <br />
                    <input className="input-field" type="text" placeholder="Phone"  />
                </div>
                <div>
                    <p className="diet">Diatery</p>
                    <div className="radio-btn">
                        <div>
                            <label className="label">Vegan</label>
                            <input type="radio" name="dietary" Value='Vegan' />
                        </div>
                        <div>
                            <label className="label">Non-veg</label>
                            <input type="radio" name="dietary" Value='Non-Veg' />
                        </div>
                        <div>
                            <label className="label">Pesacatarian</label>
                            <input type="radio" name="dietary" Value='Pesacatarian'/>
                        </div>
                    </div>
                </div>
                <input type="submit" value="Add Guest" className="btn" />
            </form>
        </div>
    )
}

export default GuestForm
