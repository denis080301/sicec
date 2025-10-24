import React, { useState, useEffect } from 'react';
import { Calendar, Users, FileText, DollarSign, Bell, Shield, Clock, CheckCircle, XCircle, AlertTriangle, Activity, UserPlus, Search, Filter, Download, Mail, Phone, CreditCard, ChevronRight, Settings, BarChart3, Menu, X, Edit, Trash2, Eye, Plus, LogOut, Stethoscope, Heart } from 'lucide-react';

const SICEC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [currentView, setCurrentView] = useState('dashboard');
  const [sloganIndex, setSloganIndex] = useState(0);
  
  const slogans = [
    "Tu salud, nuestra prioridad",
    "Excelencia en atención médica",
    "Cuidando tu bienestar",
    "Tecnología al servicio de tu salud",
    "Profesionalismo y calidez humana"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSloganIndex(prev => (prev + 1) % slogans.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const [appointments, setAppointments] = useState([
    { id: 1, patientId: 1, date: '2025-10-25', time: '08:00', type: 'Consulta General', status: 'Confirmada', doctor: 'Dr. Rodríguez' },
    { id: 2, patientId: 2, date: '2025-10-25', time: '09:00', type: 'Examen de Sangre', status: 'Pendiente', doctor: 'Dra. López' },
    { id: 3, patientId: 3, date: '2025-10-25', time: '10:00', type: 'Control', status: 'Confirmada', doctor: 'Dr. Martínez' },
    { id: 4, patientId: 4, date: '2025-10-26', time: '08:30', type: 'Consulta', status: 'Pendiente', doctor: 'Dra. Sánchez' },
    { id: 5, patientId: 5, date: '2025-10-26', time: '11:00', type: 'Radiografía', status: 'Confirmada', doctor: 'Dr. Torres' },
    { id: 6, patientId: 6, date: '2025-10-27', time: '14:00', type: 'Ecografía', status: 'Confirmada', doctor: 'Dra. Flores' },
    { id: 7, patientId: 7, date: '2025-10-27', time: '15:30', type: 'Consulta', status: 'Cancelada', doctor: 'Dr. Gómez' },
    { id: 8, patientId: 8, date: '2025-10-28', time: '09:00', type: 'Examen Completo', status: 'Pendiente', doctor: 'Dra. Ramírez' },
    { id: 9, patientId: 9, date: '2025-10-28', time: '10:30', type: 'Control Prenatal', status: 'Confirmada', doctor: 'Dr. Castro' },
    { id: 10, patientId: 10, date: '2025-10-29', time: '08:00', type: 'Cardiología', status: 'Confirmada', doctor: 'Dr. Vargas' },
    { id: 11, patientId: 11, date: '2025-10-29', time: '11:00', type: 'Dermatología', status: 'Pendiente', doctor: 'Dra. Mendoza' },
    { id: 12, patientId: 12, date: '2025-10-30', time: '13:00', type: 'Oftalmología', status: 'Confirmada', doctor: 'Dr. Herrera' },
    { id: 13, patientId: 13, date: '2025-10-30', time: '14:30', type: 'Traumatología', status: 'Pendiente', doctor: 'Dra. Silva' },
    { id: 14, patientId: 14, date: '2025-10-31', time: '09:30', type: 'Pediatría', status: 'Confirmada', doctor: 'Dr. Morales' },
    { id: 15, patientId: 15, date: '2025-10-31', time: '16:00', type: 'Neurología', status: 'Pendiente', doctor: 'Dra. Vega' },
  ]);

  const [patients, setPatients] = useState([
    { id: 1, name: 'Juan Pérez García', dni: '12345678', email: 'juan.perez@email.com', phone: '987654321', age: 35, gender: 'M' },
    { id: 2, name: 'María García López', dni: '87654321', email: 'maria.garcia@email.com', phone: '987654322', age: 28, gender: 'F' },
    { id: 3, name: 'Carlos Rodríguez Díaz', dni: '23456789', email: 'carlos.rod@email.com', phone: '987654323', age: 42, gender: 'M' },
    { id: 4, name: 'Ana Martínez Ruiz', dni: '34567890', email: 'ana.martinez@email.com', phone: '987654324', age: 31, gender: 'F' },
    { id: 5, name: 'Luis Torres Vargas', dni: '45678901', email: 'luis.torres@email.com', phone: '987654325', age: 55, gender: 'M' },
    { id: 6, name: 'Elena Flores Castro', dni: '56789012', email: 'elena.flores@email.com', phone: '987654326', age: 24, gender: 'F' },
    { id: 7, name: 'Roberto Gómez Soto', dni: '67890123', email: 'roberto.gomez@email.com', phone: '987654327', age: 48, gender: 'M' },
    { id: 8, name: 'Patricia Ramírez Luna', dni: '78901234', email: 'patricia.ramirez@email.com', phone: '987654328', age: 33, gender: 'F' },
    { id: 9, name: 'Diego Castro Peña', dni: '89012345', email: 'diego.castro@email.com', phone: '987654329', age: 29, gender: 'M' },
    { id: 10, name: 'Sofía Vargas Mora', dni: '90123456', email: 'sofia.vargas@email.com', phone: '987654330', age: 37, gender: 'F' },
    { id: 11, name: 'Miguel Mendoza Cruz', dni: '01234567', email: 'miguel.mendoza@email.com', phone: '987654331', age: 45, gender: 'M' },
    { id: 12, name: 'Lucía Herrera Ortiz', dni: '11234567', email: 'lucia.herrera@email.com', phone: '987654332', age: 26, gender: 'F' },
    { id: 13, name: 'Fernando Silva Ramos', dni: '22234567', email: 'fernando.silva@email.com', phone: '987654333', age: 52, gender: 'M' },
    { id: 14, name: 'Carmen Morales Ríos', dni: '33234567', email: 'carmen.morales@email.com', phone: '987654334', age: 41, gender: 'F' },
    { id: 15, name: 'Andrés Vega Campos', dni: '44234567', email: 'andres.vega@email.com', phone: '987654335', age: 38, gender: 'M' },
  ]);

  const [exams, setExams] = useState([
    { id: 1, patientId: 1, appointmentId: 1, type: 'Análisis de Sangre Completo', date: '2025-10-25', status: 'Completado', results: 'Resultados normales' },
    { id: 2, patientId: 2, appointmentId: 2, type: 'Hemograma', date: '2025-10-25', status: 'En Proceso', results: null },
    { id: 3, patientId: 3, appointmentId: 3, type: 'Perfil Lipídico', date: '2025-10-25', status: 'Programado', results: null },
    { id: 4, patientId: 4, appointmentId: 4, type: 'Glucosa en Ayunas', date: '2025-10-26', status: 'Programado', results: null },
    { id: 5, patientId: 5, appointmentId: 5, type: 'Radiografía de Tórax', date: '2025-10-26', status: 'Completado', results: 'Sin anomalías' },
    { id: 6, patientId: 6, appointmentId: 6, type: 'Ecografía Abdominal', date: '2025-10-27', status: 'Programado', results: null },
    { id: 7, patientId: 7, appointmentId: 7, type: 'Electrocardiograma', date: '2025-10-27', status: 'Cancelado', results: null },
    { id: 8, patientId: 8, appointmentId: 8, type: 'Examen de Orina', date: '2025-10-28', status: 'En Proceso', results: null },
    { id: 9, patientId: 9, appointmentId: 9, type: 'Prueba de Embarazo', date: '2025-10-28', status: 'Completado', results: 'Positivo' },
    { id: 10, patientId: 10, appointmentId: 10, type: 'Ecocardiograma', date: '2025-10-29', status: 'Programado', results: null },
    { id: 11, patientId: 11, appointmentId: 11, type: 'Biopsia de Piel', date: '2025-10-29', status: 'En Proceso', results: null },
    { id: 12, patientId: 12, appointmentId: 12, type: 'Examen de Vista', date: '2025-10-30', status: 'Completado', results: 'Miopía leve' },
    { id: 13, patientId: 13, appointmentId: 13, type: 'Resonancia Magnética', date: '2025-10-30', status: 'Programado', results: null },
    { id: 14, patientId: 14, appointmentId: 14, type: 'Vacunas', date: '2025-10-31', status: 'Completado', results: 'Aplicadas correctamente' },
    { id: 15, patientId: 15, appointmentId: 15, type: 'Tomografía', date: '2025-10-31', status: 'Programado', results: null },
  ]);

  const [payments, setPayments] = useState([
    { id: 1, patientId: 1, appointmentId: 1, date: '2025-10-23', amount: '150', method: 'Efectivo', status: 'Completado', transactionId: 'TRX001' },
    { id: 2, patientId: 2, appointmentId: 2, date: '2025-10-23', amount: '200', method: 'Tarjeta', status: 'Completado', transactionId: 'TRX002' },
    { id: 3, patientId: 3, appointmentId: 3, date: '2025-10-23', amount: '180', method: 'Transferencia', status: 'Pendiente', transactionId: 'TRX003' },
    { id: 4, patientId: 4, appointmentId: 4, date: '2025-10-22', amount: '250', method: 'Tarjeta', status: 'Completado', transactionId: 'TRX004' },
    { id: 5, patientId: 5, appointmentId: 5, date: '2025-10-22', amount: '300', method: 'Efectivo', status: 'Completado', transactionId: 'TRX005' },
    { id: 6, patientId: 6, appointmentId: 6, date: '2025-10-21', amount: '175', method: 'Yape/Plin', status: 'Completado', transactionId: 'TRX006' },
    { id: 7, patientId: 7, appointmentId: 7, date: '2025-10-21', amount: '220', method: 'Transferencia', status: 'Fallido', transactionId: 'TRX007' },
    { id: 8, patientId: 8, appointmentId: 8, date: '2025-10-20', amount: '190', method: 'Tarjeta', status: 'Completado', transactionId: 'TRX008' },
    { id: 9, patientId: 9, appointmentId: 9, date: '2025-10-20', amount: '280', method: 'Efectivo', status: 'Completado', transactionId: 'TRX009' },
    { id: 10, patientId: 10, appointmentId: 10, date: '2025-10-19', amount: '350', method: 'Tarjeta', status: 'Completado', transactionId: 'TRX010' },
    { id: 11, patientId: 11, appointmentId: 11, date: '2025-10-19', amount: '160', method: 'Yape/Plin', status: 'Pendiente', transactionId: 'TRX011' },
    { id: 12, patientId: 12, appointmentId: 12, date: '2025-10-18', amount: '240', method: 'Efectivo', status: 'Completado', transactionId: 'TRX012' },
    { id: 13, patientId: 13, appointmentId: 13, date: '2025-10-18', amount: '310', method: 'Transferencia', status: 'Completado', transactionId: 'TRX013' },
    { id: 14, patientId: 14, appointmentId: 14, date: '2025-10-17', amount: '185', method: 'Tarjeta', status: 'Completado', transactionId: 'TRX014' },
    { id: 15, patientId: 15, appointmentId: 15, date: '2025-10-17', amount: '270', method: 'Efectivo', status: 'Completado', transactionId: 'TRX015' },
  ]);

  const [notifications, setNotifications] = useState([]);
  const [auditLogs, setAuditLogs] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [editingItem, setEditingItem] = useState(null);

  const addNotification = (message) => {
    const newNotif = { message, time: new Date().toLocaleTimeString(), read: false };
    setNotifications(prev => [newNotif, ...prev]);
  };

  const addAuditLog = (action, description) => {
    const newLog = { action, description, timestamp: new Date().toLocaleString(), user: 'Admin' };
    setAuditLogs(prev => [newLog, ...prev]);
  };

  const handleLogin = (e) => {
    if (e) e.preventDefault();
    if (loginForm.username.toLowerCase() === 'admin' && loginForm.password === 'admin') {
      setIsLoggedIn(true);
      setTimeout(() => {
        addAuditLog('Inicio de sesión', 'Usuario admin ingresó al sistema');
      }, 100);
    } else {
      alert('Usuario o contraseña incorrectos\nUsuario: admin\nContraseña: admin');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    addAuditLog('Cierre de sesión', 'Usuario admin cerró sesión');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-emerald-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-700 to-emerald-900 p-8 text-center">
            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
              <Stethoscope className="text-emerald-700" size={48} />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">SICEC</h1>
            <p className="text-emerald-100 text-sm">Sistema de Citas y Exámenes Clínicos</p>
          </div>
          
          <form onSubmit={handleLogin} className="p-8">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Usuario</label>
              <input
                type="text"
                value={loginForm.username}
                onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                placeholder="Ingrese su usuario"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                placeholder="Ingrese su contraseña"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-emerald-700 text-white py-3 rounded-lg hover:bg-emerald-800 transition font-semibold"
            >
              Iniciar Sesión
            </button>
            
            <button
              type="button"
              onClick={() => {
                setLoginForm({ username: 'admin', password: 'admin' });
                setTimeout(() => handleLogin(), 100);
              }}
              className="w-full mt-2 bg-stone-700 text-white py-3 rounded-lg hover:bg-stone-800 transition font-semibold"
            >
              Acceso Rápido (Demo)
            </button>
            
            <div className="mt-6 text-center text-sm text-gray-500">
              <p>Usuario: <strong>admin</strong> | Contraseña: <strong>admin</strong></p>
            </div>
          </form>
        </div>
      </div>
    );
  }

  const Sidebar = () => (
    <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-stone-900 text-white transition-all duration-300 flex flex-col`}>
      <div className="p-4 flex items-center justify-between border-b border-stone-700">
        {sidebarOpen && (
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-700 rounded-lg flex items-center justify-center">
              <Stethoscope size={24} />
            </div>
            <span className="text-xl font-bold">SICEC</span>
          </div>
        )}
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-stone-800 rounded">
          <Menu size={20} />
        </button>
      </div>
      
      <nav className="flex-1 mt-4">
        {[
          { id: 'dashboard', icon: BarChart3, label: 'Dashboard' },
          { id: 'appointments', icon: Calendar, label: 'Citas' },
          { id: 'patients', icon: Users, label: 'Pacientes' },
          { id: 'exams', icon: FileText, label: 'Exámenes' },
          { id: 'payments', icon: DollarSign, label: 'Pagos' },
          { id: 'audit', icon: Shield, label: 'Auditoría' },
          { id: 'settings', icon: Settings, label: 'Configuración' },
        ].map(item => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            className={`w-full p-4 flex items-center gap-3 hover:bg-stone-800 transition ${
              currentView === item.id ? 'bg-emerald-800 border-l-4 border-emerald-500' : ''
            }`}
          >
            <item.icon size={20} />
            {sidebarOpen && <span>{item.label}</span>}
          </button>
        ))}
      </nav>

      <button
        onClick={handleLogout}
        className="p-4 flex items-center gap-3 hover:bg-red-900 transition border-t border-stone-700"
      >
        <LogOut size={20} />
        {sidebarOpen && <span>Cerrar Sesión</span>}
      </button>
    </div>
  );

  const Header = () => (
    <div className="bg-white shadow-sm p-4 flex items-center justify-between border-b-2 border-emerald-700">
      <h2 className="text-2xl font-bold text-stone-900">
        {currentView === 'dashboard' && 'Panel de Control'}
        {currentView === 'appointments' && 'Gestión de Citas'}
        {currentView === 'patients' && 'Gestión de Pacientes'}
        {currentView === 'exams' && 'Gestión de Exámenes'}
        {currentView === 'payments' && 'Gestión de Pagos'}
        {currentView === 'audit' && 'Registro de Auditoría'}
        {currentView === 'settings' && 'Configuración'}
      </h2>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 hover:bg-stone-100 rounded-full relative"
          >
            <Bell size={24} className="text-stone-700" />
            {notifications.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {notifications.length}
              </span>
            )}
          </button>
          
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border z-50">
              <div className="p-4 border-b bg-emerald-50">
                <h3 className="font-semibold text-stone-900">Notificaciones</h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.length === 0 ? (
                  <p className="p-4 text-gray-500">No hay notificaciones</p>
                ) : (
                  notifications.map((notif, idx) => (
                    <div key={idx} className="p-4 border-b hover:bg-stone-50">
                      <p className="text-sm">{notif.message}</p>
                      <span className="text-xs text-gray-500">{notif.time}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center text-white font-semibold">
            A
          </div>
          <span className="text-sm font-medium text-stone-900">Admin</span>
        </div>
      </div>
    </div>
  );

  const StatCard = ({ icon: Icon, title, value, color }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 border-l-4" style={{borderLeftColor: color}}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-stone-900">{value}</p>
        </div>
        <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: `${color}20`}}>
          <Icon style={{color: color}} size={24} />
        </div>
      </div>
    </div>
  );

  const DashboardView = () => (
    <div className="space-y-6">
      {/* Banner con Logo */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-stone-900 rounded-2xl shadow-2xl p-8 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
        
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-xl">
              <Stethoscope className="text-emerald-700" size={48} />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">SICEC</h1>
              <p className="text-xl text-emerald-100 transition-opacity duration-500">
                {slogans[sloganIndex]}
              </p>
              <p className="text-sm text-emerald-200 mt-2">Sistema Integral de Citas y Exámenes Clínicos</p>
            </div>
          </div>
          
          <div className="text-right">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="text-red-300" size={20} />
              <span className="text-emerald-100">Cuidando tu bienestar</span>
            </div>
            <p className="text-3xl font-bold">{new Date().toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={Calendar} title="Citas Hoy" value="12" color="#059669" />
        <StatCard icon={Users} title="Pacientes Activos" value={patients.length} color="#0891b2" />
        <StatCard icon={FileText} title="Exámenes Pendientes" value={exams.filter(e => e.status === 'Programado').length} color="#f59e0b" />
        <StatCard icon={DollarSign} title="Ingresos Hoy" value="S/ 2,450" color="#8b5cf6" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-stone-900">
            <Calendar className="text-emerald-700" />
            Próximas Citas
          </h3>
          <div className="space-y-3">
            {appointments.slice(0, 5).map(apt => (
              <div key={apt.id} className="flex items-center justify-between p-3 bg-stone-50 rounded-lg hover:bg-stone-100 transition">
                <div>
                  <p className="font-medium text-stone-900">{patients.find(p => p.id === apt.patientId)?.name}</p>
                  <p className="text-sm text-gray-600">{apt.date} - {apt.time} • {apt.doctor}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  apt.status === 'Confirmada' ? 'bg-green-100 text-green-800' : 
                  apt.status === 'Pendiente' ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-red-100 text-red-800'
                }`}>
                  {apt.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-stone-900">
            <Activity className="text-emerald-700" />
            Actividad Reciente
          </h3>
          <div className="space-y-3">
            {auditLogs.slice(0, 5).map((log, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Shield className="text-emerald-700" size={16} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-stone-900">{log.action}</p>
                  <p className="text-xs text-gray-500">{log.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const AppointmentsView = () => {
    const openModal = (type, item = null) => {
      setModalType(type);
      setEditingItem(item);
      setShowModal(true);
    };

    const handleSave = (formData) => {
      if (editingItem) {
        setAppointments(appointments.map(a => a.id === editingItem.id ? {...formData, id: editingItem.id} : a));
        addAuditLog('Cita actualizada', `Cita ID: ${editingItem.id} modificada`);
        addNotification(`Cita actualizada para ${formData.date}`);
      } else {
        const newApt = {...formData, id: appointments.length + 1};
        setAppointments([...appointments, newApt]);
        addAuditLog('Cita creada', `Nueva cita para paciente ID: ${formData.patientId}`);
        addNotification(`Cita agendada para ${formData.date}`);
      }
      setShowModal(false);
      setEditingItem(null);
    };

    const handleDelete = (id) => {
      if (confirm('¿Está seguro de eliminar esta cita?')) {
        setAppointments(appointments.filter(a => a.id !== id));
        addAuditLog('Cita eliminada', `Cita ID: ${id} eliminada`);
        addNotification('Cita eliminada del sistema');
      }
    };

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text"
              placeholder="Buscar cita..."
              className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:ring-2 focus:ring-emerald-700"
            />
          </div>
          <button 
            onClick={() => openModal('appointment')}
            className="px-4 py-2 bg-emerald-700 text-white rounded-lg flex items-center gap-2 hover:bg-emerald-800 transition"
          >
            <Plus size={18} />
            Nueva Cita
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Paciente</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Fecha</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Hora</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Tipo</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Médico</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Estado</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {appointments.map(apt => {
                const patient = patients.find(p => p.id === apt.patientId);
                return (
                  <tr key={apt.id} className="hover:bg-stone-50">
                    <td className="px-6 py-4 text-stone-900">{patient?.name}</td>
                    <td className="px-6 py-4">{apt.date}</td>
                    <td className="px-6 py-4">{apt.time}</td>
                    <td className="px-6 py-4">{apt.type}</td>
                    <td className="px-6 py-4">{apt.doctor}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        apt.status === 'Confirmada' ? 'bg-green-100 text-green-800' :
                        apt.status === 'Pendiente' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {apt.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button onClick={() => openModal('appointment', apt)} className="text-emerald-700 hover:text-emerald-900">
                          <Edit size={18} />
                        </button>
                        <button onClick={() => handleDelete(apt.id)} className="text-red-600 hover:text-red-800">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {showModal && modalType === 'appointment' && (
          <AppointmentModal
            item={editingItem}
            patients={patients}
            onSave={handleSave}
            onClose={() => {setShowModal(false); setEditingItem(null);}}
          />
        )}
      </div>
    );
  };

  const PatientsView = () => {
    const openModal = (type, item = null) => {
      setModalType(type);
      setEditingItem(item);
      setShowModal(true);
    };

    const handleSave = (formData) => {
      if (editingItem) {
        setPatients(patients.map(p => p.id === editingItem.id ? {...formData, id: editingItem.id} : p));
        addAuditLog('Paciente actualizado', `Paciente: ${formData.name}`);
        addNotification(`Datos de ${formData.name} actualizados`);
      } else {
        const newPatient = {...formData, id: patients.length + 1};
        setPatients([...patients, newPatient]);
        addAuditLog('Paciente registrado', `Nuevo paciente: ${formData.name}`);
        addNotification(`Paciente ${formData.name} registrado exitosamente`);
      }
      setShowModal(false);
      setEditingItem(null);
    };

    const handleDelete = (id) => {
      if (confirm('¿Está seguro de eliminar este paciente?')) {
        setPatients(patients.filter(p => p.id !== id));
        addAuditLog('Paciente eliminado', `Paciente ID: ${id} eliminado`);
        addNotification('Paciente eliminado del sistema');
      }
    };

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text"
              placeholder="Buscar paciente..."
              className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:ring-2 focus:ring-emerald-700"
            />
          </div>
          <button 
            onClick={() => openModal('patient')}
            className="px-4 py-2 bg-emerald-700 text-white rounded-lg flex items-center gap-2 hover:bg-emerald-800 transition"
          >
            <UserPlus size={18} />
            Nuevo Paciente
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {patients.map(patient => (
            <div key={patient.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition border-l-4 border-emerald-700">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-lg">
                    {patient.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900">{patient.name}</h3>
                    <p className="text-sm text-gray-600">DNI: {patient.dni}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <button onClick={() => openModal('patient', patient)} className="p-1 text-emerald-700 hover:bg-emerald-50 rounded">
                    <Edit size={16} />
                  </button>
                  <button onClick={() => handleDelete(patient.id)} className="p-1 text-red-600 hover:bg-red-50 rounded">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail size={16} />
                  {patient.email}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone size={16} />
                  {patient.phone}
                </div>
                <div className="text-gray-600">
                  Edad: {patient.age} años • {patient.gender === 'M' ? 'Masculino' : 'Femenino'}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t flex gap-2">
                <button className="flex-1 px-3 py-2 bg-stone-100 text-stone-700 rounded hover:bg-stone-200 text-sm font-medium">
                  Ver Historial
                </button>
                <button className="flex-1 px-3 py-2 bg-emerald-700 text-white rounded hover:bg-emerald-800 text-sm font-medium">
                  Nueva Cita
                </button>
              </div>
            </div>
          ))}
        </div>

        {showModal && modalType === 'patient' && (
          <PatientModal
            item={editingItem}
            onSave={handleSave}
            onClose={() => {setShowModal(false); setEditingItem(null);}}
          />
        )}
      </div>
    );
  };

  const ExamsView = () => {
    const openModal = (type, item = null) => {
      setModalType(type);
      setEditingItem(item);
      setShowModal(true);
    };

    const handleSave = (formData) => {
      if (editingItem) {
        setExams(exams.map(e => e.id === editingItem.id ? {...formData, id: editingItem.id} : e));
        addAuditLog('Examen actualizado', `Examen ID: ${editingItem.id} modificado`);
        addNotification(`Examen ${formData.type} actualizado`);
      } else {
        const newExam = {...formData, id: exams.length + 1};
        setExams([...exams, newExam]);
        addAuditLog('Examen creado', `Nuevo examen: ${formData.type}`);
        addNotification(`Examen ${formData.type} programado`);
      }
      setShowModal(false);
      setEditingItem(null);
    };

    const handleDelete = (id) => {
      if (confirm('¿Está seguro de eliminar este examen?')) {
        setExams(exams.filter(e => e.id !== id));
        addAuditLog('Examen eliminado', `Examen ID: ${id} eliminado`);
        addNotification('Examen eliminado del sistema');
      }
    };

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Programados</p>
                <p className="text-2xl font-bold text-blue-600">{exams.filter(e => e.status === 'Programado').length}</p>
              </div>
              <Clock className="text-blue-600" size={32} />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">En Proceso</p>
                <p className="text-2xl font-bold text-yellow-600">{exams.filter(e => e.status === 'En Proceso').length}</p>
              </div>
              <Activity className="text-yellow-600" size={32} />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completados</p>
                <p className="text-2xl font-bold text-green-600">{exams.filter(e => e.status === 'Completado').length}</p>
              </div>
              <CheckCircle className="text-green-600" size={32} />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-stone-900">Lista de Exámenes</h3>
          <button 
            onClick={() => openModal('exam')}
            className="px-4 py-2 bg-emerald-700 text-white rounded-lg flex items-center gap-2 hover:bg-emerald-800 transition"
          >
            <Plus size={18} />
            Nuevo Examen
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Paciente</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Tipo de Examen</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Fecha</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Estado</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Resultados</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {exams.map(exam => {
                const patient = patients.find(p => p.id === exam.patientId);
                return (
                  <tr key={exam.id} className="hover:bg-stone-50">
                    <td className="px-6 py-4 text-stone-900">{patient?.name}</td>
                    <td className="px-6 py-4">{exam.type}</td>
                    <td className="px-6 py-4">{exam.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        exam.status === 'Completado' ? 'bg-green-100 text-green-800' :
                        exam.status === 'En Proceso' ? 'bg-yellow-100 text-yellow-800' :
                        exam.status === 'Programado' ? 'bg-blue-100 text-blue-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {exam.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {exam.results ? (
                        <button className="text-emerald-700 hover:text-emerald-900 flex items-center gap-1">
                          <Eye size={16} />
                          Ver
                        </button>
                      ) : (
                        <span className="text-gray-400 text-sm">Sin resultados</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button onClick={() => openModal('exam', exam)} className="text-emerald-700 hover:text-emerald-900">
                          <Edit size={18} />
                        </button>
                        <button onClick={() => handleDelete(exam.id)} className="text-red-600 hover:text-red-800">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {showModal && modalType === 'exam' && (
          <ExamModal
            item={editingItem}
            patients={patients}
            appointments={appointments}
            onSave={handleSave}
            onClose={() => {setShowModal(false); setEditingItem(null);}}
          />
        )}
      </div>
    );
  };

  const PaymentsView = () => {
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState(null);
    const [paymentForm, setPaymentForm] = useState({
      patientId: '',
      amount: '',
      method: 'Efectivo'
    });

    const handleProcessPayment = () => {
      const success = Math.random() > 0.2;
      setPaymentStatus(success ? 'success' : 'failed');
      if (success) {
        const newPayment = {
          id: payments.length + 1,
          ...paymentForm,
          date: new Date().toISOString().split('T')[0],
          status: 'Completado',
          transactionId: `TRX${Date.now()}`
        };
        setPayments([...payments, newPayment]);
        addNotification(`Pago de S/ ${paymentForm.amount} procesado exitosamente`);
        addAuditLog('Pago procesado', `Pago exitoso - S/ ${paymentForm.amount}`);
      } else {
        addAuditLog('Pago fallido', `Intento de pago fallido - S/ ${paymentForm.amount}`);
      }
    };

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Hoy</p>
                <p className="text-2xl font-bold text-green-600">S/ 2,450</p>
              </div>
              <DollarSign className="text-green-600" size={32} />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pendientes</p>
                <p className="text-2xl font-bold text-yellow-600">S/ 850</p>
              </div>
              <Clock className="text-yellow-600" size={32} />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completados</p>
                <p className="text-2xl font-bold text-blue-600">{payments.filter(p => p.status === 'Completado').length}</p>
              </div>
              <CheckCircle className="text-blue-600" size={32} />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-red-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Fallidos</p>
                <p className="text-2xl font-bold text-red-600">3</p>
              </div>
              <XCircle className="text-red-600" size={32} />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button 
            onClick={() => setShowPaymentModal(true)}
            className="px-4 py-2 bg-emerald-700 text-white rounded-lg flex items-center gap-2 hover:bg-emerald-800 transition"
          >
            <CreditCard size={18} />
            Procesar Pago
          </button>
        </div>

        {showPaymentModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-stone-900">Procesar Pago</h3>
                <button onClick={() => {setShowPaymentModal(false); setPaymentStatus(null);}}>
                  <X size={24} />
                </button>
              </div>
              
              {!paymentStatus ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Paciente</label>
                    <select 
                      value={paymentForm.patientId}
                      onChange={(e) => setPaymentForm({...paymentForm, patientId: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-700"
                    >
                      <option value="">Seleccionar paciente</option>
                      {patients.map(p => (
                        <option key={p.id} value={p.id}>{p.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Monto (S/)</label>
                    <input 
                      type="number" 
                      value={paymentForm.amount}
                      onChange={(e) => setPaymentForm({...paymentForm, amount: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-700" 
                      placeholder="150.00" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Método de Pago</label>
                    <select 
                      value={paymentForm.method}
                      onChange={(e) => setPaymentForm({...paymentForm, method: e.target.value})}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-700"
                    >
                      <option>Efectivo</option>
                      <option>Tarjeta de Crédito</option>
                      <option>Tarjeta de Débito</option>
                      <option>Transferencia</option>
                      <option>Yape/Plin</option>
                    </select>
                  </div>
                  <button 
                    onClick={handleProcessPayment}
                    className="w-full px-4 py-3 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 font-semibold"
                  >
                    Procesar Pago
                  </button>
                </div>
              ) : paymentStatus === 'success' ? (
                <div className="text-center py-8">
                  <CheckCircle className="mx-auto text-green-600 mb-4" size={64} />
                  <h4 className="text-2xl font-bold text-green-600 mb-2">¡Pago Exitoso!</h4>
                  <p className="text-gray-600 mb-4">El pago ha sido procesado correctamente</p>
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-gray-600">Monto pagado</p>
                    <p className="text-3xl font-bold text-gray-800">S/ {paymentForm.amount}</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg mb-6 text-left">
                    <p className="font-medium text-emerald-900 flex items-center gap-2">
                      <Bell size={16} />
                      Recordatorios enviados:
                    </p>
                    <ul className="text-sm text-emerald-800 mt-2 space-y-1">
                      <li>✓ Confirmación de pago por email</li>
                      <li>✓ Instrucciones de preparación para examen</li>
                      <li>✓ Recordatorio 24h antes de la cita</li>
                    </ul>
                  </div>
                  <button 
                    onClick={() => {
                      setShowPaymentModal(false);
                      setPaymentStatus(null);
                      setPaymentForm({patientId: '', amount: '', method: 'Efectivo'});
                    }}
                    className="px-6 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800"
                  >
                    Cerrar
                  </button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <XCircle className="mx-auto text-red-600 mb-4" size={64} />
                  <h4 className="text-2xl font-bold text-red-600 mb-2">Pago Fallido</h4>
                  <p className="text-gray-600 mb-4">No se pudo procesar el pago</p>
                  <div className="bg-red-50 p-4 rounded-lg mb-6 text-left">
                    <p className="text-sm font-medium text-red-900 mb-2">Posibles causas:</p>
                    <ul className="list-disc list-inside text-red-800 text-sm space-y-1">
                      <li>Fondos insuficientes</li>
                      <li>Tarjeta rechazada o expirada</li>
                      <li>Error en los datos ingresados</li>
                      <li>Problema con el procesador de pagos</li>
                    </ul>
                  </div>
                  <div className="flex gap-2 justify-center">
                    <button 
                      onClick={() => setPaymentStatus(null)}
                      className="px-6 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800"
                    >
                      Reintentar
                    </button>
                    <button 
                      onClick={() => {setShowPaymentModal(false); setPaymentStatus(null);}}
                      className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">ID Transacción</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Paciente</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Fecha</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Monto</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Método</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {payments.map(payment => {
                const patient = patients.find(p => p.id === payment.patientId);
                return (
                  <tr key={payment.id} className="hover:bg-stone-50">
                    <td className="px-6 py-4 font-mono text-sm">{payment.transactionId}</td>
                    <td className="px-6 py-4 text-stone-900">{patient?.name || 'N/A'}</td>
                    <td className="px-6 py-4">{payment.date}</td>
                    <td className="px-6 py-4 font-semibold text-emerald-700">S/ {payment.amount}</td>
                    <td className="px-6 py-4">{payment.method}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        payment.status === 'Completado' ? 'bg-green-100 text-green-800' :
                        payment.status === 'Pendiente' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const AuditView = () => (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="p-4 border-b bg-stone-50">
        <h3 className="font-semibold flex items-center gap-2 text-stone-900">
          <Shield className="text-emerald-700" />
          Registro de Auditoría
        </h3>
      </div>
      <div className="divide-y">
        {auditLogs.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            Realiza acciones en el sistema para ver el registro de auditoría
          </div>
        ) : (
          auditLogs.map((log, idx) => (
            <div key={idx} className="p-4 hover:bg-stone-50">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Shield className="text-emerald-700" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-stone-900">{log.action}</p>
                    <p className="text-sm text-gray-600">{log.description}</p>
                    <p className="text-xs text-gray-500 mt-1">Usuario: {log.user} • {log.timestamp}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );

  const SettingsView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-stone-900">Notificaciones</h3>
        <div className="space-y-3">
          <label className="flex items-center justify-between p-3 bg-stone-50 rounded">
            <span>Recordatorios de citas</span>
            <input type="checkbox" defaultChecked className="w-5 h-5 text-emerald-700" />
          </label>
          <label className="flex items-center justify-between p-3 bg-stone-50 rounded">
            <span>Notificaciones de pago</span>
            <input type="checkbox" defaultChecked className="w-5 h-5 text-emerald-700" />
          </label>
          <label className="flex items-center justify-between p-3 bg-stone-50 rounded">
            <span>Resultados de exámenes</span>
            <input type="checkbox" defaultChecked className="w-5 h-5 text-emerald-700" />
          </label>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-stone-900">Horarios</h3>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">Hora de inicio</label>
            <input type="time" defaultValue="08:00" className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-700" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Hora de cierre</label>
            <input type="time" defaultValue="18:00" className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-700" />
          </div>
        </div>
      </div>
    </div>
  );

  // Modales
  const AppointmentModal = ({ item, patients, onSave, onClose }) => {
    const [formData, setFormData] = useState(item || {
      patientId: '',
      date: '',
      time: '',
      type: 'Consulta',
      doctor: '',
      status: 'Pendiente'
    });

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-stone-900">{item ? 'Editar Cita' : 'Nueva Cita'}</h3>
            <button onClick={onClose}><X size={24} /></button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Paciente</label>
              <select 
                value={formData.patientId}
                onChange={(e) => setFormData({...formData, patientId: e.target.value})}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-700"
              >
                <option value="">Seleccionar paciente</option>
                {patients.map(p => (
                  <option key={p.id} value={p.id}>{p.name} - {p.dni}</option>
                ))}
              </select>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Fecha</label>
                <input 
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Hora</label>
                <input 
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-700"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Tipo de Cita</label>
              <select 
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-700"
              >
                <option>Consulta</option>
                <option>Examen</option>
                <option>Control</option>
                <option>Emergencia</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Médico</label>
              <input 
                type="text"
                value={formData.doctor}
                onChange={(e) => setFormData({...formData, doctor: e.target.value})}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-700"
                placeholder="Nombre del médico"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Estado</label>
              <select 
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-700"
              >
                <option>Pendiente</option>
                <option>Confirmada</option>
                <option>Cancelada</option>
              </select>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button 
                onClick={onClose}
                className="px-4 py-2 border rounded hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button 
                onClick={() => onSave(formData)}
                className="px-4 py-2 bg-emerald-700 text-white rounded hover:bg-emerald-800"
              >
                {item ? 'Actualizar' : 'Crear'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const PatientModal = ({ item, onSave, onClose }) => {
    const [formData, setFormData] = useState(item || {
      name: '',
      dni: '',
      email: '',
      phone: '',
      age: '',
      gender: 'M'
    });

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-stone-900">{item ? 'Editar Paciente' : 'Nuevo Paciente'}</h3>
            <button onClick={onClose}><X size={24} /></button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nombre Completo</label>
              <input 
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-700"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">DNI</label>
                <input 
                  type="text"
                  value={formData.dni}
                  onChange={(e) => setFormData({...formData, dni: e.target.value})}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Edad</label>
                <input 
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-700"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Género</label>
              <select 
                value={formData.gender}
                onChange={(e) => setFormData({...formData, gender: e.target.value})}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-700"
              >
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input 
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-700"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Teléfono</label>
              <input 
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-700"
              />
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button 
                onClick={onClose}
                className="px-4 py-2 border rounded hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button 
                onClick={() => onSave(formData)}
                className="px-4 py-2 bg-emerald-700 text-white rounded hover:bg-emerald-800"
              >
                {item ? 'Actualizar' : 'Registrar'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ExamModal = ({ item, patients, appointments, onSave, onClose }) => {
    const [formData, setFormData] = useState(item || {
      patientId: '',
      appointmentId: '',
      type: '',
      date: '',
      status: 'Programado',
      results: ''
    });

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-stone-900">{item ? 'Editar Examen' : 'Nuevo Examen'}</h3>
            <button onClick={onClose}><X size={24} /></button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Paciente</label>
              <select 
                value={formData.patientId}
                onChange={(e) => setFormData({...formData, patientId: e.target.value})}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-700"
              >
                <option value="">Seleccionar paciente</option>
                {patients.map(p => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Cita Asociada</label>
              <select 
                value={formData.appointmentId}
                onChange={(e) => setFormData({...formData, appointmentId: e.target.value})}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-700"
              >
                <option value="">Seleccionar cita</option>
                {appointments.map(apt => (
                  <option key={apt.id} value={apt.id}>
                    {apt.type} - {apt.date} ({patients.find(p => p.id === apt.patientId)?.name})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Tipo de Examen</label>
              <input 
                type="text"
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-700"
                placeholder="Ej: Análisis de Sangre"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Fecha</label>
              <input 
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-700"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Estado</label>
              <select 
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-700"
              >
                <option>Programado</option>
                <option>En Proceso</option>
                <option>Completado</option>
                <option>Cancelado</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Resultados</label>
              <textarea 
                value={formData.results}
                onChange={(e) => setFormData({...formData, results: e.target.value})}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-emerald-700"
                rows="4"
                placeholder="Ingrese los resultados del examen..."
              />
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button 
                onClick={onClose}
                className="px-4 py-2 border rounded hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button 
                onClick={() => onSave(formData)}
                className="px-4 py-2 bg-emerald-700 text-white rounded hover:bg-emerald-800"
              >
                {item ? 'Actualizar' : 'Crear'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-stone-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          {currentView === 'dashboard' && <DashboardView />}
          {currentView === 'appointments' && <AppointmentsView />}
          {currentView === 'patients' && <PatientsView />}
          {currentView === 'exams' && <ExamsView />}
          {currentView === 'payments' && <PaymentsView />}
          {currentView === 'audit' && <AuditView />}
          {currentView === 'settings' && <SettingsView />}
        </main>
      </div>
    </div>
  );
};

export default SICEC;