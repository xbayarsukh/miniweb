import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Template({ templates }) {
    return (
        <AuthenticatedLayout header="Template">
            <Head title="Template" />

            <div className="w-full px-6 py-6 mx-auto">
                <div className="flex flex-wrap -mx-3">
                    <div className="flex-none w-full max-w-full px-3">
                        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="flex flex-row justify-between p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                                <h6>Template</h6>
                            </div>
                            <div className="flex-auto px-0 pt-0 pb-2">
                                <div className="p-0 overflow-x-auto">
                                    <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                                        <thead className="align-bottom">
                                            <tr>
                                                <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                                                    Name
                                                </th>
                                                <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                                                    Front-End
                                                </th>
                                                <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                                                    Image
                                                </th>
                                                <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                                                    About Overview
                                                </th>
                                                <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                                                    Service
                                                </th>
                                                <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {templates.map((template) => (
                                                <tr>
                                                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <div className="flex px-2 py-1">
                                                            <div className="flex flex-col justify-center">
                                                                <h6 className="mb-0 text-sm leading-normal">
                                                                    {
                                                                        template.name
                                                                    }
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <p className="mb-0 text-xs font-semibold leading-tight">
                                                            {template.frontend}
                                                        </p>
                                                    </td>
                                                    <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <div>
                                                            <img
                                                                src={
                                                                    "/" +
                                                                    template.image
                                                                }
                                                                className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl"
                                                                alt="user1"
                                                            />
                                                        </div>
                                                    </td>
                                                    <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                            <details>
                                                                <summary className="cursor-pointer">
                                                                    {template.about_overview
                                                                        ? `about.overview${template.about_overview.substring(
                                                                              1,
                                                                              20
                                                                          )}${
                                                                              template
                                                                                  .about_overview
                                                                                  .length >
                                                                              20
                                                                                  ? "..."
                                                                                  : ""
                                                                          }`
                                                                        : "No overview available"}
                                                                </summary>

                                                                <p className="mt-2 text-xs">
                                                                    {
                                                                        template.about_overview
                                                                    }
                                                                </p>
                                                            </details>
                                                        </td>
                                                    </td>
                                                    <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <details>
                                                            <summary className="cursor-pointer">
                                                                {template.services
                                                                    ? `about.overview${template.services.substring(
                                                                          1,
                                                                          20
                                                                      )}${
                                                                          template
                                                                              .services
                                                                              .length >
                                                                          20
                                                                              ? "..."
                                                                              : ""
                                                                      }`
                                                                    : "No overview available"}
                                                            </summary>

                                                            <p className="mt-2 text-xs">
                                                                {
                                                                    template.services
                                                                }
                                                            </p>
                                                        </details>
                                                    </td>
                                                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                                        <a
                                                            href={route(
                                                                "admin.template.edit",
                                                                template.id
                                                            )}
                                                            className="text-xs font-semibold leading-tight text-slate-400"
                                                        >
                                                            {" "}
                                                            Edit{" "}
                                                        </a>
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
