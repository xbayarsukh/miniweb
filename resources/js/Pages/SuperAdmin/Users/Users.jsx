import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { DateTime } from 'luxon';

export default function Users({users}){
    return (
        <AuthenticatedLayout
        >
            <Head title="Dashboard" />

            <div className="w-full px-6 py-6 mx-auto">


        <div className="flex flex-wrap -mx-3">
          <div className="flex-none w-full max-w-full px-3">
            <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
              <div className="flex flex-row justify-between p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <h6>Хэрэглэгчид</h6>           
              </div>
              <div className="flex-auto px-0 pt-0 pb-2">
                <div className="p-0 overflow-x-auto">
                  <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                    <thead className="align-bottom">
                      <tr>
                        <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">ID</th>
                        <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Name</th>
                        <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Subdomain</th>
                        <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Template</th>
                        <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Phone</th>
                        <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Expire Date</th>
                        <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Email</th>
                        <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                      </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                      <tr>
                         <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <div className="flex px-2 py-1">
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-0 text-sm leading-normal">{user.id}</h6>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <div className="flex px-2 py-1">
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-0 text-sm leading-normal">{user.name}</h6>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <p className="mb-0 text-xs font-semibold leading-tight">{user.subdomain}</p>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <p className="mb-0 text-xs font-semibold leading-tight">{user.template}</p>
                        </td>
                        
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <p className="mb-0 text-xs font-semibold leading-tight">{user.phone}</p>
                        </td>
                       
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">                       
                          <p className="mb-0 text-xs font-semibold leading-tight">{user.expire_date}</p>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <p className="mb-0 text-xs font-semibold leading-tight">{user.email}</p>
                        </td>                  
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                        <a href={route('admin.users.edit',user.id)} className="text-xs font-semibold leading-tight text-slate-400"> Edit </a>
                        </td>
                      </tr>
                    ))}
                      

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </AuthenticatedLayout>
    );
}
