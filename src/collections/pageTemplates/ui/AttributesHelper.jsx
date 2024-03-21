import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { reduceFieldsToValues, useAllFormFields, useFormFields } from 'payload/components/forms'

function AttributesHelper() {
    const [fields, setFields] = useState([])

    const [allFields, dispatchFields] = useAllFormFields();
    const formData = reduceFieldsToValues(allFields, true);
    const stringifiedFormData = JSON.stringify(formData, null, 2);

    const { value: collectionName } = useFormFields(([fields, dispatch]) => fields.templateCollection)

    useEffect(() => {
        (async () => {
            if (!collectionName) return
            console.log(collectionName)
            const res = await axios(`/api/pageTemplates/getCollectionSchema/${collectionName}`)
            setFields(res.data.fields)
        })()
    }, [collectionName])

    return (
        <div style={{ marginBottom: '4rem' }}>
            <h4>Attributes</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {fields.map(field => (
                    <div key={field.name} style={{ width: '50%', color: stringifiedFormData.includes(`<%=${field.name}%>`) ? 'green' : 'red' }}>
                        <h5>{field.name}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AttributesHelper