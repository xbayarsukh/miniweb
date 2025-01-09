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
              <div className="p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <h6>Хэрэглэгчид</h6>
              </div>
              <div className="flex-auto px-0 pt-0 pb-2">
                <div className="p-0 overflow-x-auto">
                  <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                    <thead className="align-bottom">
                      <tr>
                        <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Author</th>
                        <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Phone</th>
                        <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                        <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Employed</th>
                        <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Expries</th>
                        <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                      </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                      <tr>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <div className="flex px-2 py-1">
                            <div>
                              <img src="/assets/img/team-2.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl" alt="user1" />
                            </div>
                            <div className="flex flex-col justify-center">
                              <h6 className="mb-0 text-sm leading-normal">{user.name}</h6>
                              <p className="mb-0 text-xs leading-tight text-slate-400">{user.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <p className="mb-0 text-xs font-semibold leading-tight">{user.phone}</p>
                        </td>
                        <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="bg-gradient-to-tl from-green-600 to-lime-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Online</span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight text-slate-400">
                              {(() => {
                                  const timestamp = user.created_at;  // UTC timestamp
                                  // Parse the UTC timestamp and convert it to the desired time zone
                                  const date = DateTime.fromISO(timestamp, { zone: 'utc' }).setZone('Asia/Ulaanbaatar');

                                  // Get the formatted date in the correct time zone
                                  const formattedDate = date.toFormat("yyyy/MM/dd, HH:mm");                              
                                  return <div>{formattedDate}</div>;
                              })()}
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="text-xs font-semibold leading-tight text-slate-400">
                              {(() => {
                                  const timestamp = user.created_at;  // UTC timestamp
                                  // Parse the UTC timestamp and convert it to the desired time zone
                                  const date = DateTime.fromISO(timestamp, { zone: 'utc' }).setZone('Asia/Ulaanbaatar');

                                  // Get the formatted date in the correct time zone
                                  const formattedDate = date.toFormat("yyyy/MM/dd, HH:mm");                              
                                  return <div>{formattedDate}</div>;
                              })()}
                          </span>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <a href="javascript:;" className="text-xs font-semibold leading-tight text-slate-400"> Edit </a>
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
