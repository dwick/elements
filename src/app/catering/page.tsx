import Button from "@/components/Button";
import Field from "@/components/Field";
import GoogleForm from "@/components/GoogleForm";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";

export default function Catering() {
  return (
    <div className="mx-auto max-w-xl">
      <GoogleForm
        action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSfS7WmZlA5OkxjQOte4BZydtw8PYnmwM2Oh1fZcXBMty07pCQ/formResponse'
      >
        <h1 className="text-2xl">Catering</h1>
        <p className="text-slate-500">
          Share your specific requirements, including the date, number of people, and on-site or off-site preferences using the form below. Our Catering Staff will promptly reach out to you.
        </p>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <Field name='entry.1343615799' label='Name' className='col-span-4'>
                <Input type='text' />
              </Field>
              <Field name='entry.1762728336' label='Email' className='col-span-4' required>
                <Input type='text' pattern='.+@.+\..+' errorMessage="Please enter a valid email address" />
              </Field>
              <Field name='entry.2139056644' label='Message' className='col-span-full'>
                <Textarea rows={6}></Textarea>
              </Field>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Button type='submit' >Submit</Button>
        </div>
      </GoogleForm>
    </div>
  );
}
