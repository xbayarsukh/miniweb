import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { DateTime } from 'luxon';

export default function Package({packages}){
    return (
        <AuthenticatedLayout header='Package'
        >
          <Head title="Package" />
          <div className="w-full px-6 py-6 mx-auto">
            <div className="flex flex-wrap -mx-3">
              <div className="flex-none w-full max-w-full px-3">
                <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                  <div className="flex flex-row justify-between p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                    <h6>Package</h6>
                    <a
                                    href={route("admin.package.create")}
                                    className="inline-block px-3 py-2 my-2 font-bold text-center text-white uppercase align-middle transition-all ease-in border-0 rounded-lg select-none shadow-soft-md bg-150 bg-x-25 leading-pro text-xs bg-gradient-to-tl from-purple-700 to-pink-500 hover:shadow-soft-2xl hover:scale-102"
                                >
                                    Нэмэх
                                </a>
                  </div>
                  <div className="flex-auto px-0 pt-0 pb-2">
                    <div className="p-0 overflow-x-auto">
                      <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                        <thead className="align-bottom">
                          <tr>
                            <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">ID</th>
                            <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Гарчиг</th>
                            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Үнэ</th>
                            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Сар</th>
                            <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Өдөр</th>
                            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Үүсгэсэн огноо</th>
                            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Шинэчилсэн огноо</th>
                            
                            <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                          </tr>
                        </thead>                                              <tbody>
                          {packages.map((pack) => (
                          <tr>
                            <td className="py-2 px-3 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                <div className="flex px-2 py-1">
                                  <div className="flex flex-col justify-center">
                                    <h6 className="mb-0 text-sm leading-normal">{pack.id}</h6>
                                  </div>
                                </div>
                              </td>
                              <td className="py-2 px-3 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                <div className="flex px-2 py-1">
                                  <div className="flex flex-col justify-center">
                                    <h6 className="mb-0 text-sm leading-normal">{pack.title}</h6>
                                  </div>
                                </div>
                              </td>
                              <td className="py-2 px-3 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                <div className="flex px-2 py-1">
                                  <div className="flex flex-col justify-center">
                                    <h6 className="mb-0 text-sm leading-normal">{pack.price}</h6>
                                  </div>
                                </div>
                              </td>
                              <td className="py-2 px-3 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                <div className="flex px-2 py-1">
                                  <div className="flex flex-col justify-center">
                                    <h6 className="mb-0 text-sm leading-normal">{pack.month}</h6>
                                  </div>
                                </div>
                              </td>
                              <td className="py-2 px-3 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                <div className="flex px-2 py-1">
                                  <div className="flex flex-col justify-center">
                                    <h6 className="mb-0 text-sm leading-normal">{pack.day}</h6>
                                  </div>
                                </div>
                              </td>
                               <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                                <span className="text-xs font-semibold leading-tight text-slate-400">
                                                                    {(() => {
                                                                        const timestamp = pack.created_at;  // UTC timestamp
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
                                                                        const timestamp = pack.updated_at;  // UTC timestamp
                                                                        // Parse the UTC timestamp and convert it to the desired time zone
                                                                        const date = DateTime.fromISO(timestamp, { zone: 'utc' }).setZone('Asia/Ulaanbaatar');
                              
                                                                        // Get the formatted date in the correct time zone
                                                                        const formattedDate = date.toFormat("yyyy/MM/dd, HH:mm");                              
                                                                        return <div>{formattedDate}</div>;
                                                                    })()}
                                                                </span>
                                                            </td>
                                                            
                                                            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                              <a href={route('admin.package.edit',pack.id)} className="text-xs font-semibold leading-tight text-slate-400"> Edit </a>
                            </td>
                          </tr>
                           ) )
                          }
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
