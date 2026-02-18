import Input from "../../components/Input";
import Select from "../../components/Select";
import PageHeader from "../../components/PageHeader/PageHeader";



export default function NewContact() {
    return (
        <>
        <PageHeader title="New Contact" />

        <Input type="text" placeholder="Name" />
        <Select>
            <option value="123">Intagram</option>
            <option value="123">Intagram</option>
            <option value="123">Intagram</option>

        </Select>
        </>
    )
    }
