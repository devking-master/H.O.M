'use client';

import { useState } from 'react';
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  eachDayOfInterval, 
  isSameMonth, 
  isSameDay, 
  addDays,
  parseISO
} from 'date-fns';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Plus, X, Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const initialEvents = [
  { id: 1, date: new Date().toISOString(), title: 'Sunday Worship Service', time: '10:00 AM', location: 'Main Sanctuary' },
  { id: 2, date: addDays(new Date(), 2).toISOString(), title: 'Midweek Power Service', time: '6:30 PM', location: 'Grace Hall' },
  { id: 3, date: addDays(new Date(), 5).toISOString(), title: 'Youth Fellowship', time: '4:00 PM', location: 'Online' },
];

export default function EventCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState(initialEvents);
  const [sidePanelOpen, setSidePanelOpen] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', time: '', location: '' });

  const daysInMonth = eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentMonth)),
    end: endOfWeek(endOfMonth(currentMonth)),
  });

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const dayEvents = selectedDate 
    ? events.filter(event => isSameDay(parseISO(event.date), selectedDate))
    : [];

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (!selectedDate || !newEvent.title) return;

    const event = {
      id: Date.now(),
      date: selectedDate.toISOString(),
      ...newEvent
    };

    setEvents([...events, event]);
    setNewEvent({ title: '', time: '', location: '' });
    setShowAddForm(false);
  };

  return (
    <section className="bg-bg min-h-screen py-24 md:py-32 overflow-hidden">
      <div className="section-wrap flex flex-col items-center">
        
        {/* Calendar Header */}
        <div className="mb-12 flex w-full max-w-5xl items-center justify-between">
          <div>
            <p className="label mb-2">Church Schedule</p>
            <h2 className="text-3xl font-black tracking-tighter md:text-5xl">
              {format(currentMonth, 'MMMM yyyy')}
            </h2>
          </div>
          <div className="flex gap-2">
            <button onClick={prevMonth} className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-2 text-fg hover:bg-bg-3 transition-colors">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={nextMonth} className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-2 text-fg hover:bg-bg-3 transition-colors">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mac-style Calendar Grid */}
        <div className="w-full max-w-5xl overflow-hidden rounded-[24px] border border-border bg-white shadow-2xl dark:bg-black">
          {/* Days of week */}
          <div className="grid grid-cols-7 border-b border-border bg-bg-2/50 backdrop-blur-md">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="py-4 text-center text-[10px] font-black uppercase tracking-widest text-fg-3">
                {day}
              </div>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 grid-rows-5">
            {daysInMonth.map((day, i) => {
              const hasEvents = events.some(event => isSameDay(parseISO(event.date), day));
              const isSelected = selectedDate && isSameDay(day, selectedDate);
              const isToday = isSameDay(day, new Date());

              return (
                <div
                  key={day.toString()}
                  onClick={() => {
                    setSelectedDate(day);
                    setSidePanelOpen(true);
                  }}
                  className={cn(
                    "relative flex aspect-square cursor-pointer flex-col items-start justify-start border-r border-b border-border p-1.5 transition-all hover:bg-accent/5",
                    !isSameMonth(day, currentMonth) && "bg-bg-2/30 text-fg-3",
                    isSelected && "bg-accent/[0.08]"
                  )}
                >
                  <span className={cn(
                    "flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold mb-1",
                    isToday && "bg-accent text-white",
                    isSelected && !isToday && "bg-accent/20 text-accent",
                    !isToday && !isSelected && "text-fg"
                  )}>
                    {format(day, 'd')}
                  </span>
                  
                  {/* Event Titles in Cells */}
                  <div className="flex w-full flex-col gap-0.5 overflow-hidden">
                    {events
                      .filter(event => isSameDay(parseISO(event.date), day))
                      .slice(0, 2)
                      .map(event => (
                        <div 
                          key={event.id} 
                          className="w-full truncate rounded-[4px] bg-accent/10 px-1 py-0.5 text-[8px] font-bold text-accent"
                        >
                          {event.title}
                        </div>
                      ))
                    }
                    {events.filter(event => isSameDay(parseISO(event.date), day)).length > 2 && (
                      <div className="px-1 text-[8px] font-bold text-fg-3">
                        + {events.filter(event => isSameDay(parseISO(event.date), day)).length - 2} more
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Side Panel (Glassmorphic) */}
        <AnimatePresence>
          {sidePanelOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSidePanelOpen(false)}
                className="fixed inset-x-0 bottom-0 z-[110] bg-black/20 backdrop-blur-[2px]"
                style={{ top: '64px' }}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed right-0 z-[111] w-full max-w-md bg-white/80 dark:bg-black/80 backdrop-blur-3xl shadow-2xl border-l border-border"
                style={{ top: '64px', height: 'calc(100% - 64px)' }}
              >
                <div className="flex h-full flex-col p-8">
                  <div className="mb-12 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-black tracking-widest text-accent uppercase">Agenda</p>
                      <h3 className="text-2xl font-black tracking-tight text-fg">
                        {selectedDate ? format(selectedDate, 'EEEE, MMM do') : 'Select a date'}
                      </h3>
                    </div>
                    <button 
                      onClick={() => setSidePanelOpen(false)}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-2 text-fg hover:bg-neutral-200 dark:hover:bg-neutral-800"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto space-y-6">
                    {dayEvents.length > 0 ? (
                      dayEvents.map(event => (
                        <motion.div 
                          key={event.id}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="glass relative overflow-hidden rounded-2xl p-6 border-l-4 border-l-accent"
                        >
                          <h4 className="text-lg font-bold text-fg mb-3">{event.title}</h4>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-fg-2">
                              <Clock className="h-4 w-4 text-accent" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-fg-2">
                              <MapPin className="h-4 w-4 text-accent" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <div className="flex flex-col items-center justify-center py-20 text-center opacity-40">
                        <CalendarIcon className="h-12 w-12 mb-4" />
                        <p className="text-sm font-medium">No events scheduled for this day</p>
                      </div>
                    )}
                  </div>

                  {/* Quick Add Form Section */}
                  <div className="mt-8 pt-6 border-t border-border">
                    {!showAddForm ? (
                      <button 
                        onClick={() => setShowAddForm(true)}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-4 font-bold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <Plus className="h-5 w-5" /> Quick Add Event
                      </button>
                    ) : (
                      <motion.form 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        onSubmit={handleAddEvent}
                        className="space-y-4"
                      >
                        <input
                          autoFocus
                          placeholder="Event Title"
                          value={newEvent.title}
                          onChange={e => setNewEvent({...newEvent, title: e.target.value})}
                          className="w-full rounded-xl border border-border bg-bg-2 p-4 text-sm font-medium text-fg focus:ring-2 focus:ring-accent outline-none placeholder:text-fg-3"
                        />
                        <div className="flex gap-2">
                          <input
                            placeholder="Time (e.g. 10:00 AM)"
                            value={newEvent.time}
                            onChange={e => setNewEvent({...newEvent, time: e.target.value})}
                            className="w-1/2 rounded-xl border border-border bg-bg-2 p-4 text-sm font-medium text-fg outline-none focus:ring-2 focus:ring-accent placeholder:text-fg-3"
                          />
                          <input
                            placeholder="Location"
                            value={newEvent.location}
                            onChange={e => setNewEvent({...newEvent, location: e.target.value})}
                            className="w-1/2 rounded-xl border border-border bg-bg-2 p-4 text-sm font-medium text-fg outline-none focus:ring-2 focus:ring-accent placeholder:text-fg-3"
                          />
                        </div>
                        <div className="flex gap-2">
                          <button 
                            type="button"
                            onClick={() => setShowAddForm(false)}
                            className="flex-1 rounded-xl bg-bg-2 py-3 text-sm font-bold text-fg transition-colors hover:bg-neutral-200"
                          >
                            Cancel
                          </button>
                          <button 
                            type="submit"
                            className="flex-1 rounded-xl bg-accent py-3 text-sm font-bold text-white shadow-lg transition-opacity hover:opacity-90"
                          >
                            Save Event
                          </button>
                        </div>
                      </motion.form>
                    )}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
