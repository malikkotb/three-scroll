"use client"
import { Head } from 'next/document'
import React, { useState } from 'react'
import List from '../components/List'
import Modal from '../components/Modal'

export default function page() {
  const [current, setCurrent] = useState(null) // urrently selected card
  return (
    <div>
      <List setCurrent={setCurrent} />
      <Modal current={current} setCurrent={setCurrent} />
    </div>
  )
}
