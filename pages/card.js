import React from 'react'

export default function Card() {
  return (
    <div className="max-w-xl">
            <div className="overflow-hidden bg-white border shadow rounded-xl">
                <header className="border-b py-2.5 px-4 bg-gray-50/50 flex items-center justify-between">
                    <div>
                    <h1 className="font-medium">
                        Card Title
                    </h1>
                    <span className="text-gray-500">Est dolor ut voluptate minim.</span>
                    </div>
                    <a href="#" className="px-5 rounded-xl text-white py-2.5 text-sm font-semibold bg-purple-700 hover:bg-purple-900">Contact</a>
                </header>
                <section className="py-2.5 px-4">
                    Sit ullamco voluptate consectetur qui labore est nulla
                    fugiat labore consectetur irure sit. Non laboris amet
                    proident magna aliquip laboris cillum id sint ad excepteur
                    aute. Reprehenderit incididunt laboris Lorem quis amet
                    voluptate labore ullamco proident. Eu quis Lorem ullamco
                    amet sint ipsum laborum elit pariatur.
                </section>
                <footer className="py-2.5 px-4 border-t bg-gray-50/50 text-gray-500">
                    Fugiat fugiat magna aliqua
                </footer>
            </div>
        </div>
  )
}
