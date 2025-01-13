import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import MoneyFormat from '../../../Components/MoneyFormat';
import { DateTime } from 'luxon';

export default function Billing({orders, pagination}){
    return (
        <AuthenticatedLayout header='Bills'
        >
          <Head title="Bills" />
          <div className="w-full px-6 py-6 mx-auto">
            <div className="flex flex-wrap -mx-3">
              <div className="flex-none w-full max-w-full px-3">
                <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                  <div className="p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                    <h6>Bills</h6>
                  </div>
                  <div className="flex-auto px-0 pt-0 pb-2">
                    <div className="p-0 overflow-x-auto">
                      <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                        <thead className="align-bottom">
                          <tr>
                          <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Захиалгын дугаар</th>
                            <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Хэрэглэгч</th>
                            <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Багц</th>
                            <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Үнийн дүн</th>
                            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Үүссэн огноо</th>
                            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Төлбөрийн огноо</th>
                            <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.data.map((order) => (
                            <tr>
                              <td className="py-2 px-3 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                <div className="flex px-2 py-1">
                                  <div className="flex flex-col justify-center">
                                    <h6 className="mb-0 text-sm leading-normal">{order.order_no}</h6>
                                  </div>
                                </div>
                              </td>
                              <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                <div className="flex px-3 py-1">
                                  <div className="flex flex-col justify-center">
                                    <h6 className="mb-0 text-sm leading-normal">{order.name}</h6>
                                   
                                  </div>
                                </div>
                              </td>
                              <td className="px-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                  <p className="mb-0 text-xs font-semibold leading-tight">
                                      {order.month > 0 ? '1 сарын багц' : ('Тrial Багц ' + order.day + ' хоног')}
                                  </p>
                              </td>
                              <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                            <p className="mb-0 text-xs font-semibold leading-tight">
                                                                <MoneyFormat amount={order.total_price} />
                                                            </p>
                                                        </td>
                              <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                <span class={"bg-gradient-to-tl "+(order.payment_status == "paid"?"from-green-600 to-lime-400": "from-red-600 to-rose-400")+" px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white"}>
                                                                {order.payment_status == "paid" ? "Төлсөн" : "Төлөөгүй"}
                                                            </span>
                              </td>
                              
                              <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                  <span className="text-xs font-semibold leading-tight text-slate-400">
                                      {(() => {
                                          const timestamp = order.created_at;  // UTC timestamp
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
                                          const timestamp = order.updated_at;  // UTC timestamp
                                          // Parse the UTC timestamp and convert it to the desired time zone
                                          const date = DateTime.fromISO(timestamp, { zone: 'utc' }).setZone('Asia/Ulaanbaatar');

                                          // Get the formatted date in the correct time zone
                                          const formattedDate = date.toFormat("yyyy/MM/dd, HH:mm");                              
                                          return <div>{formattedDate}</div>;
                                      })()}
                                  </span>
                              </td>
                              <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                  <a
                                      href={route('admin.orders.edit', { id: order.order_no })}
                                      className="text-xs font-semibold leading-tight text-slate-400"
                                  >
                                      {/* Edit icon */}
                                      <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="16" height="16"><path d="M23.821,11.181v0C22.943,9.261,19.5,3,12,3S1.057,9.261.179,11.181a1.969,1.969,0,0,0,0,1.64C1.057,14.739,4.5,21,12,21s10.943-6.261,11.821-8.181A1.968,1.968,0,0,0,23.821,11.181ZM12,18a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,18Z"/><circle cx="12" cy="12" r="4"/></svg>
                                  </a>
                              </td>
                            </tr>
                          ))}
                          
                        </tbody>
                      </table>
                      <div className="pagination">
                    {pagination.prev_page_url && (
                        <button onClick={() => handlePageChange(pagination.current_page - 1)}>Previous</button>
                    )}
                    {pagination.next_page_url && (
                        <button onClick={() => handlePageChange(pagination.current_page + 1)}>Next</button>
                    )}
                </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AuthenticatedLayout>
    );
}
